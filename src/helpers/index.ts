export async function CallApi<Type>(url: string, prefix: string): Promise<Type> {
  const response = await fetch(url);
  if (prefix) {
    return (await response.json())[prefix] as Type;
  }

  return (await response.json()) as Type;
}

export default {};
