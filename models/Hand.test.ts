import Hand, { HandActionType } from "./Hand";
import Rank from "./Rank";
import Suit from "./Suit";

describe("Hand", () => {
  describe("#snapshots", () => {
    it("matches the snapshot #1", () => {
      const hand = new Hand({
        playerInitialStackSizes: new Map(
          [105.88, 76, 97.2, 93, 79.6, 66.2].map((v, k) => [k, v])
        ),
        playerCards: new Map([
          [
            1,
            [
              { rank: Rank.queen, suit: Suit.diamond },
              { rank: Rank.seven, suit: Suit.diamond },
            ],
          ],
        ]),
        smallBlindSize: 0.4,
        antiSize: 0,
        communityCards: [],
        preflopActions: [
          { type: HandActionType.fold, playerIndex: 2, betSize: 0 },
          { type: HandActionType.fold, playerIndex: 3, betSize: 0 },
          { type: HandActionType.fold, playerIndex: 4, betSize: 0 },
          { type: HandActionType.raise, playerIndex: 5, betSize: 4 },
          { type: HandActionType.fold, playerIndex: 0, betSize: 0.4 },
          { type: HandActionType.fold, playerIndex: 1, betSize: 1 },
        ],
        flopActions: [],
        turnActions: [],
        riverActions: [],
      });

      expect(hand.snapshots).toMatchSnapshot();
    });

    it("matches the snapshot #2", () => {
      const hand = new Hand({
        playerInitialStackSizes: new Map(
          [82, 103.2, 107.6, 113.2, 100.6, 94.8].map((v, k) => [k, v])
        ),
        playerCards: new Map([
          [
            2,
            [
              { rank: Rank.ace, suit: Suit.diamond },
              { rank: Rank.king, suit: Suit.heart },
            ],
          ],
          [
            3,
            [
              { rank: Rank.four, suit: Suit.spade },
              { rank: Rank.four, suit: Suit.heart },
            ],
          ],
        ]),
        smallBlindSize: 0.4,
        antiSize: 0,
        communityCards: [
          { rank: Rank.four, suit: Suit.club },
          { rank: Rank.seven, suit: Suit.club },
          { rank: Rank.six, suit: Suit.spade },
          { rank: Rank.three, suit: Suit.spade },
        ],
        preflopActions: [
          { type: HandActionType.raise, playerIndex: 2, betSize: 3 },
          { type: HandActionType.call, playerIndex: 3, betSize: 3 },
          { type: HandActionType.fold, playerIndex: 4, betSize: 0 },
          { type: HandActionType.fold, playerIndex: 5, betSize: 0 },
          { type: HandActionType.call, playerIndex: 0, betSize: 3 },
          { type: HandActionType.fold, playerIndex: 1, betSize: 1 },
        ],
        flopActions: [
          { type: HandActionType.check, playerIndex: 0, betSize: 0 },
          { type: HandActionType.bet, playerIndex: 2, betSize: 4.8 },
          { type: HandActionType.call, playerIndex: 3, betSize: 4.8 },
          { type: HandActionType.fold, playerIndex: 0, betSize: 0 },
        ],
        turnActions: [
          { type: HandActionType.bet, playerIndex: 2, betSize: 9.4 },
          { type: HandActionType.raise, playerIndex: 3, betSize: 22 },
          { type: HandActionType.fold, playerIndex: 2, betSize: 9.4 },
        ],
        riverActions: [],
      });

      expect(hand.snapshots).toMatchSnapshot();
    });
  });

  describe("#finalPotSize", () => {
    describe("returns the total bet size accumurated in the hand", () => {
      test("#1", () => {
        const hand = new Hand({
          playerInitialStackSizes: new Map(
            [105.88, 76, 97.2, 93, 79.6, 66.2].map((v, k) => [k, v])
          ),
          playerCards: new Map([
            [
              1,
              [
                { rank: Rank.queen, suit: Suit.diamond },
                { rank: Rank.seven, suit: Suit.diamond },
              ],
            ],
          ]),
          smallBlindSize: 0.4,
          antiSize: 0,
          communityCards: [],
          preflopActions: [
            { type: HandActionType.fold, playerIndex: 2, betSize: 0 },
            { type: HandActionType.fold, playerIndex: 3, betSize: 0 },
            { type: HandActionType.fold, playerIndex: 4, betSize: 0 },
            { type: HandActionType.raise, playerIndex: 5, betSize: 4 },
            { type: HandActionType.fold, playerIndex: 0, betSize: 0.4 },
            { type: HandActionType.fold, playerIndex: 1, betSize: 1 },
          ],
          flopActions: [],
          turnActions: [],
          riverActions: [],
        });

        expect(hand.finalPotSize).toBe(5.4);
      });

      test("#2", () => {
        const hand = new Hand({
          playerInitialStackSizes: new Map(
            [82, 103.2, 107.6, 113.2, 100.6, 94.8].map((v, k) => [k, v])
          ),
          playerCards: new Map([
            [
              2,
              [
                { rank: Rank.ace, suit: Suit.diamond },
                { rank: Rank.king, suit: Suit.heart },
              ],
            ],
            [
              3,
              [
                { rank: Rank.four, suit: Suit.spade },
                { rank: Rank.four, suit: Suit.heart },
              ],
            ],
          ]),
          smallBlindSize: 0.4,
          antiSize: 0,
          communityCards: [
            { rank: Rank.four, suit: Suit.club },
            { rank: Rank.seven, suit: Suit.club },
            { rank: Rank.six, suit: Suit.spade },
            { rank: Rank.three, suit: Suit.spade },
          ],
          preflopActions: [
            { type: HandActionType.raise, playerIndex: 2, betSize: 3 },
            { type: HandActionType.call, playerIndex: 3, betSize: 3 },
            { type: HandActionType.fold, playerIndex: 4, betSize: 0 },
            { type: HandActionType.fold, playerIndex: 5, betSize: 0 },
            { type: HandActionType.call, playerIndex: 0, betSize: 3 },
            { type: HandActionType.fold, playerIndex: 1, betSize: 1 },
          ],
          flopActions: [
            { type: HandActionType.check, playerIndex: 0, betSize: 0 },
            { type: HandActionType.bet, playerIndex: 2, betSize: 4.8 },
            { type: HandActionType.call, playerIndex: 3, betSize: 4.8 },
            { type: HandActionType.fold, playerIndex: 0, betSize: 0 },
          ],
          turnActions: [
            { type: HandActionType.bet, playerIndex: 2, betSize: 9.4 },
            { type: HandActionType.raise, playerIndex: 3, betSize: 22 },
            { type: HandActionType.fold, playerIndex: 2, betSize: 9.4 },
          ],
          riverActions: [],
        });

        expect(hand.finalPotSize).toBe(51);
      });
    });
  });
});
