function formatUTC(date: string) {
  const utcDate = new Date(date);
  const utcDateString = utcDate.toISOString();

  return utcDateString;
}

export default formatUTC;
