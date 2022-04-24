export function convertSecoundsToMmSs(data: number): string {
  return ~~(data / 60) + ":" + (data % 60 < 10 ? "0" : "") + data % 60 as string
}