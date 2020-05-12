import styled from "styled-components";
import * as React from "react";
import {
  SPADE_COLOR,
  INVERSE_SPADE_COLOR,
  HEART_COLOR,
  DIAMOND_COLOR,
  CLUB_COLOR,
} from "../../constants/color";
import Suit from "../../models/Suit";

interface Props extends React.Attributes {
  /**
   * The icon's suit.
   */
  suit: Suit;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A SVG icon React component of playing cards' suits.
 */
export default function SuitIcon({ suit, ...props }: Props) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <g fill="none" fillRule="nonzero">
        {SVG_CONTENT_BY_SUIT[suit]}
      </g>
    </svg>
  );
}

const SpadePath = styled.path`
  fill: ${SPADE_COLOR};

  @media (prefers-color-scheme: dark) {
    fill: ${INVERSE_SPADE_COLOR};
  }
`;

const HeartPath = styled.path`
  fill: ${HEART_COLOR};
`;

const DiamondPath = styled.path`
  fill: ${DIAMOND_COLOR};
`;

const ClubPath = styled.path`
  fill: ${CLUB_COLOR};
`;

const ShadowPath = styled.path`
  fill: #0000001f;
`;

const SVG_CONTENT_BY_SUIT: Record<Suit, React.ReactFragment> = {
  [Suit.spade]: (
    <>
      <SpadePath d="M32.976.328a2.213 2.213 0 00-2.318 0C25.172 3.674 2.082 18.79 2.082 36.146c0 9.02 7.3 16.333 16.306 16.333 2.948 0 5.71-.786 8.095-2.158.683-.393 1.483.303 1.214 1.05a36.314 36.314 0 01-5.31 9.761c-.854 1.12-.033 2.743 1.366 2.743h16.3c1.4 0 2.219-1.624 1.364-2.744a36.324 36.324 0 01-5.265-9.641c-.27-.743.518-1.44 1.204-1.057a16.16 16.16 0 007.89 2.046c9.005 0 16.306-7.313 16.306-16.333 0-17.355-23.09-32.472-28.576-35.818z" />
      <ShadowPath d="M27.054 50.23c2.698 0 2.744 2.495 1.69 11.26-.106.876-.057 2.385 1.173 2.385h-6.164c-1.4 0-2.22-1.623-1.365-2.743a36.323 36.323 0 005.31-9.761c.193-.539-.17-1.044-.644-1.14zM31.783.016l.194.007C23.97 10.462 6.762 40.886 25.083 51.03a16.172 16.172 0 01-6.695 1.449c-9.006 0-16.306-7.313-16.306-16.333 0-17.355 23.09-32.472 28.576-35.818.406-.248.866-.34 1.32-.306z" />
    </>
  ),
  [Suit.heart]: (
    <>
      <HeartPath d="M0 20.71C0 10.963 7.857 3.06 17.548 3.06c4.804 0 9.153 1.945 12.32 5.09a3.034 3.034 0 004.264 0c3.167-3.146 7.516-5.09 12.32-5.09C56.143 3.06 64 10.962 64 20.71c0 18.23-23.474 34.813-30.212 39.198a3.274 3.274 0 01-3.576 0C23.474 55.523 0 38.94 0 20.711" />
      <ShadowPath d="M24.685 4.6a17.346 17.346 0 00-7.137-1.54C7.857 3.06 0 10.962 0 20.71c0 18.23 23.474 34.813 30.212 39.198A3.275 3.275 0 0032 60.44C8.019 27.705 16.552 9.386 24.685 4.6z" />
    </>
  ),
  [Suit.diamond]: (
    <>
      <DiamondPath d="M33.795.885c7.678 9.932 19.386 21.641 29.315 29.32a2.262 2.262 0 010 3.59c-9.93 7.679-21.637 19.388-29.315 29.32a2.262 2.262 0 01-3.59 0C22.527 53.182 10.82 41.473.89 33.794a2.262 2.262 0 010-3.59c9.93-7.679 21.637-19.388 29.315-29.32a2.262 2.262 0 013.59 0z" />
      <ShadowPath d="M31.724 63.115c-3.541-9.932-8.941-21.641-13.52-29.32-.545-.913-.545-2.677 0-3.59 4.579-7.679 9.979-19.388 13.52-29.32.176-.493.535-.71.843-.806a2.254 2.254 0 00-2.362.807C22.527 10.816 10.82 22.526.89 30.206a2.262 2.262 0 000 3.588c9.93 7.68 21.637 19.39 29.315 29.32a2.254 2.254 0 002.362.807 1.254 1.254 0 01-.843-.806z" />
    </>
  ),
  [Suit.club]: (
    <>
      <ClubPath d="M51.27 25.779c-5.537-.318-10.384 2.736-12.709 7.294-.513 1.006-1.369 1.797-2.441 2.152l-.04.013c-.912.3-1.823-.477-1.68-1.426a35.964 35.964 0 011.461-6.067c.356-1.061 1.132-1.913 2.13-2.42 4.57-2.32 7.635-7.173 7.317-12.72-.389-6.78-6.03-12.32-12.816-12.594-7.65-.308-13.948 5.802-13.948 13.382 0 5.222 2.995 9.734 7.356 11.94.99.501 1.757 1.347 2.109 2.397a35.984 35.984 0 011.466 6.082c.143.949-.768 1.726-1.68 1.426l-.04-.014c-1.072-.354-1.927-1.144-2.44-2.15-2.324-4.558-7.172-7.613-12.71-7.295-6.78.389-12.32 6.03-12.594 12.816-.308 7.65 5.802 13.948 13.382 13.948 5.205 0 9.705-2.975 11.92-7.314.515-1.01 1.374-1.802 2.45-2.157l.037-.013c.912-.3 1.82.477 1.68 1.428a35.886 35.886 0 01-7.368 17.004c-.763.964-.057 2.384 1.173 2.384H40.59c1.23 0 1.937-1.42 1.174-2.384a35.886 35.886 0 01-7.368-17.004c-.141-.95.767-1.729 1.68-1.428l.037.013c1.076.355 1.935 1.148 2.45 2.157 2.214 4.339 6.714 7.314 11.92 7.314 7.58 0 13.69-6.299 13.381-13.948-.273-6.786-5.813-12.427-12.594-12.816z" />
      <ShadowPath d="M29.138 43.416c2.914 1.824 1.194 13.796-.507 18.075-.455 1.143-.057 2.384 1.173 2.384h-6.519c-1.23 0-1.937-1.42-1.174-2.384a35.886 35.886 0 007.368-17.004c.063-.419-.341-1.071-.341-1.071zM12.605 25.779a13.369 13.369 0 015.205.732c-5.038 1.788-8.757 6.555-8.98 12.084-.245 6.091 3.585 11.314 8.98 13.194a13.322 13.322 0 01-4.417.754c-7.58 0-13.69-6.299-13.382-13.948.274-6.786 5.813-12.427 12.594-12.816zm32.062 21.82c2.353 3.124 4.885 4.403 8.099 4.737-.492.086-.989.153-1.496.183-5.537.317-10.384-2.737-12.709-7.294-.513-1.007-1.369-1.797-2.441-2.152a3.246 3.246 0 00-.369-.075l-.064-.004s4.989-.694 8.98 4.604zM18.544 13.392c0-7.58 6.298-13.69 13.948-13.382 1.337.054 2.628.32 3.845.752-5.222 1.828-8.974 5.992-8.974 12.63 0 2.397.977 6.633 1.616 8.774 1.628 5.459 2.258 10.932 1.858 12.178-.413 1.285-2.349 1.072-2.66.964l-.004-.01a1.298 1.298 0 001.302-1.488 35.96 35.96 0 00-1.466-6.08c-.352-1.051-1.12-1.897-2.109-2.397-.187-.095-.368-.2-.55-.303l-.274-.16c-3.909-2.336-6.532-6.594-6.532-11.478zm20.017 19.68c2.325-4.558 7.172-7.612 12.71-7.294.506.029 1.003.096 1.495.182-3.214.334-5.746 1.614-8.1 4.738-3.99 5.298-8.979 4.605-8.979 4.605l.064-.005c.142-.016.357-.07.369-.074 1.072-.355 1.928-1.146 2.441-2.152z" />
    </>
  ),
};
