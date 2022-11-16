export default function formatDate(dateString: string) {
  // add T00:00:00Z to make it date string if needed, since it is already parsed, then no need.
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
