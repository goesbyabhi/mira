"use server";

export async function handleSearch(formData: FormData) {
  const query = formData.get("search") as string;

  if (typeof query !== "string" || !query.trim()) {
    return {
      result: "Please provide a search query.",
    };
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const data = await res.json();
  return {
    result: data.results,
  };
}
