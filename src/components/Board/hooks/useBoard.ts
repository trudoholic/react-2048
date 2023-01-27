import { useContext } from "react";
// import { BoardContext } from "../context/BoardContext";

/**
 * Returns the properties of the board such as tile container width or tile count.
 */
export const useBoard = () => {
    // const { containerWidth, tileCount } = useContext(BoardContext);
    const { containerWidth, tileCount } = { containerWidth:1, tileCount:1 };

    return [containerWidth, tileCount] as [number, number];
};