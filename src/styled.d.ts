import {} from "styled-components";

import { Theme } from "./styles/theme";

type customTheme = typeof Theme;

declare module "styled-components" {
    export interface DefaultTheme extends customTheme {}
}