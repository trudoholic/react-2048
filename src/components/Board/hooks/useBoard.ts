import { useContext } from "react";
import { BoardContext } from "../context/BoardContext";

/**
 * Returns the properties of the board such as tile container width or tile count.
 */
export const useBoard = () => {
    const { containerWidth, tileCount } = { containerWidth: 0, tileCount: 4 };
    // const { containerWidth, tileCount } = useContext(BoardContext);

    return [containerWidth, tileCount] as [number, number];
};