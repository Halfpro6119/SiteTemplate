export const COVERED_POSTCODE_PREFIXES = ['ST', 'DE', 'WS', 'WV', 'B79', 'WS15', 'ST14', 'ST15', 'ST16', 'ST17', 'ST18', 'ST19', 'ST20', 'ST21'];
export const COVERED_TOWNS = [
  'stoke', 'stoke-on-trent', 'stafford', 'stone', 'rugeley', 'cannock', 'derby', 'derbyshire',
  'uttoxeter', 'burton', 'tamworth', 'lichfield', 'newcastle-under-lyme', 'kidsgrove', 'leek',
  'staffordshire', 'abbots', 'barlaston', 'eccleshall', 'gnosall', 'penkridge', 'hednesford'
];

function normalizeInput(value: string): string {
  return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

export function checkCovered(input: string): boolean {
  if (!input || input.length < 2) return false;
  const norm = normalizeInput(input);
  const postcodePart = norm.replace(/\s/g, '').replace(/\d/g, '');
  if (postcodePart.length >= 2) {
    const prefix = postcodePart.slice(0, 2).toUpperCase();
    if (COVERED_POSTCODE_PREFIXES.some((p) => p.startsWith(prefix) || prefix.startsWith(p.slice(0, 2)))) return true;
  }
  return COVERED_TOWNS.some((town) => norm.includes(town));
}
