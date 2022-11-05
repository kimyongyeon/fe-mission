interface Member {
  name?: string;
  id?: number;
}

const m: Partial<Member> = {
  name: "12123",
};
const re: Required<Member> = {
  name: "12123",
  id: 123123,
};
const pickme: Pick<Member, "name"> = {
  name: "123123",
};
const omitme: Omit<Member, "name"> = {
  id: 234234,
};
const readOnlyme: Readonly<Member> = {
  name: "234234",
  id: 12123,
};
readOnlyme.name = "123123";

// interface Grade {
//   1: 'A' | 'B' | 'C' | 'D' | 'F',
//   2: 'A' | 'B' | 'C' | 'D' | 'F',
//   3: 'A' | 'B' | 'C' | 'D' | 'F',
//   4: 'A' | 'B' | 'C' | 'D' | 'F',
//   5: 'A' | 'B' | 'C' | 'D' | 'F',
// }
type Grade = 1 | 2 | 3 | 4 | 5;
type Score = "A" | "B" | "C" | "D" | "F";
const score: Record<Grade, Score> = {
  1: "A",
  2: "A",
  3: "A",
  4: "A",
  5: "A",
};
