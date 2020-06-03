import { ApolloClient, gql } from "apollo-boost";
import { AnswerId } from "@@/models/Answer";

export default async function likeAnswer(
  answerId: AnswerId,
  {
    apolloClient,
    authenticationToken,
  }: {
    apolloClient: ApolloClient<any>;
    authenticationToken: string | null;
  }
): Promise<void> {
  await apolloClient.mutate({
    mutation: MUTATION,
    variables: { answerId },
    context: { headers: { authorization: `Bearer ${authenticationToken}` } },
  });
}

const MUTATION = gql`
  mutation($answerId: ID!) {
    likeAnswer(id: $answerId)
  }
`;