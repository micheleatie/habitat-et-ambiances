// Clé publique destinée au navigateur. Aucune clé serveur ne doit figurer ici.
export const contributionsEndpoint =
  'https://igleycblgzxftgwswjvg.supabase.co/functions/v1/contributions';
export const publishableKey = 'sb_publishable_hwjVr9RMTZns_26RsL6VEA_eAwOTtEW';

export async function saveContribution(payload: {
  kind: string;
  primaryText: string;
  secondaryText: string;
  contextText: string;
  email: string;
  tags: string[];
  consent: boolean;
}) {
  const response = await fetch(contributionsEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', apikey: publishableKey },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  });
  const result = await response.json().catch(() => ({})) as {
    id?: number; status?: string; error?: string;
  };
  if (!response.ok) {
    if (response.status === 401 || response.status === 403) {
      throw new Error('La collecte n’est pas encore disponible. Réessayez plus tard.');
    }
    throw new Error(result.error || 'La contribution n’a pas pu être enregistrée.');
  }
  if (response.status !== 201 || result.status !== 'received' || typeof result.id !== 'number') {
    throw new Error('L’enregistrement n’a pas pu être confirmé.');
  }
  return result;
}
