export interface GetResultProps extends Record<string, string | undefined> {
  id?: string;
  gender?: string;
}

export interface ResultProps {
  resultKey: string;
  voteNum: string;
}
