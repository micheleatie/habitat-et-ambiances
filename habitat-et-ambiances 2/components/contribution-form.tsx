"use client";

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { saveContribution } from "@/lib/contributions-client";

type Kind = "ambiance" | "habitat" | "expert" | "collaboration";
type FieldName = "primaryText" | "secondaryText" | "contextText" | "email";
type Field = { name: FieldName; label: string; placeholder: string; textarea?: boolean; required?: boolean };

type ContributionFormProps = {
  kind: Kind;
  title: string;
  submitLabel: string;
  successMessage: string;
  fields: Field[];
  options?: string[];
  consentText?: string;
};

type Payload = {
  kind: Kind;
  primaryText: string;
  secondaryText: string;
  contextText: string;
  email: string;
  tags: string[];
  consent: boolean;
};

type ModelContext = {
  registerTool: (tool: {
    name: string;
    title: string;
    description: string;
    inputSchema: object;
    annotations: { readOnlyHint: boolean; untrustedContentHint: boolean };
    execute: (input: unknown) => Promise<unknown>;
  }, options?: { signal?: AbortSignal }) => void | Promise<void>;
};

const initialAnswers = { primaryText: "", secondaryText: "", contextText: "", email: "" };

export function ContributionForm({ kind, title, submitLabel, successMessage, fields, options = [], consentText }: ContributionFormProps) {
  const [answers, setAnswers] = useState(initialAnswers);
  const [tags, setTags] = useState<string[]>([]);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const submit = useCallback(async (payload: Payload) => {
    setStatus("saving");
    setMessage("Enregistrement en cours…");
    try {
      const result = await saveContribution(payload);
      setStatus("success");
      setMessage(successMessage);
      setAnswers(initialAnswers);
      setTags([]);
      setConsent(false);
      window.dispatchEvent(new Event("contribution-saved"));
      return { id: result.id, status: "received", message: successMessage };
    } catch (error) {
      const detail = error instanceof Error ? error.message : "La contribution n’a pas pu être enregistrée.";
      setStatus("error");
      setMessage(detail);
      throw error;
    }
  }, [successMessage]);

  useEffect(() => {
    const context = (document as Document & { modelContext?: ModelContext }).modelContext;
    if (!context?.registerTool) return;
    const lifecycle = new AbortController();
    const toolName = `submit_${kind}_contribution`;
    try {
      void Promise.resolve(context.registerTool({
        name: toolName,
        title,
        description: `Enregistre une contribution de recherche de type ${kind} et actualise l’état visible du formulaire.`,
        inputSchema: {
          type: "object",
          properties: {
            primaryText: { type: "string", minLength: 2, maxLength: 600 },
            secondaryText: { type: "string", maxLength: 1600 },
            contextText: { type: "string", maxLength: 1000 },
            email: { type: "string", maxLength: 180 },
            tags: { type: "array", items: { type: "string" }, maxItems: 12 },
            consent: { type: "boolean", const: true },
          },
          required: [...fields.filter((field) => field.required).map((field) => field.name), "consent"],
          additionalProperties: false,
        },
        annotations: { readOnlyHint: false, untrustedContentHint: true },
        async execute(input) {
          const data = input as Partial<Payload>;
          return submit({
            kind,
            primaryText: data.primaryText || "",
            secondaryText: data.secondaryText || "",
            contextText: data.contextText || "",
            email: data.email || "",
            tags: Array.isArray(data.tags) ? data.tags : [],
            consent: data.consent === true,
          });
        },
      }, { signal: lifecycle.signal })).catch(() => undefined);
    } catch {
      return;
    }
    return () => lifecycle.abort();
  }, [fields, kind, submit, title]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await submit({ kind, ...answers, tags, consent });
    } catch {
      // The visible live region already preserves the response and explains the error.
    }
  }

  return (
    <form className="contribution-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <p className="kicker">Contribution</p>
        <h2>{title}</h2>
      </div>

      {fields.map((field, index) => {
        const id = `${kind}-${field.name}`;
        const value = answers[field.name];
        const common = {
          id,
          name: field.name,
          value,
          required: field.required,
          placeholder: field.placeholder,
          onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
            setAnswers((current) => ({ ...current, [field.name]: event.target.value })),
        };
        return (
          <div className="form-field" key={field.name}>
            <label htmlFor={id}><span>{String(index + 1).padStart(2, "0")}</span>{field.label}</label>
            {field.textarea ? <Textarea {...common} rows={5} /> : <Input {...common} type={field.name === "email" ? "email" : "text"} />}
          </div>
        );
      })}

      {options.length > 0 && (
        <fieldset className="option-field">
          <legend>Quels thèmes sont concernés&nbsp;?</legend>
          <div className="option-grid">
            {options.map((option) => {
            const id = `${kind}-${option.toLowerCase().replaceAll(" ", "-")}`;
            const checked = tags.includes(option);
            return (
              <label key={option} htmlFor={id}>
                <Checkbox
                  id={id}
                  checked={checked}
                  onCheckedChange={(next) => setTags((current) => next === true ? [...current, option] : current.filter((item) => item !== option))}
                />
                {option}
              </label>
            );
            })}
          </div>
        </fieldset>
      )}

      <label className="consent-row" htmlFor={`${kind}-consent`}>
        <Checkbox id={`${kind}-consent`} required checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} />
        <span>{consentText || "J’accepte que cette réponse soit conservée à des fins de recherche. Elle ne sera pas publiée telle quelle ni associée publiquement à mon identité."}</span>
      </label>
      <p className="form-policy-link">Consultez la <a href="/donnees">politique des données</a> pour connaître l’usage, la durée de conservation et vos droits.</p>

      <div className="form-submit">
        <Button type="submit" size="lg" disabled={status === "saving" || !consent}>
          {status === "saving" ? "Enregistrement…" : submitLabel}
          {status === "success" ? <Check /> : <ArrowRight />}
        </Button>
        <output className={`form-status status-${status}`} aria-live="polite">{message}</output>
      </div>
    </form>
  );
}
