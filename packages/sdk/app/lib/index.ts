export { AppsManager, App } from "./appManager";
export { ServiceManager } from "./serviceManager";
import AppBase from "./components/appBase";
import Window from "./components/window";

export { AppBase, Window };

export const keepOpen = () => setTimeout(keepOpen, 2147483647);

export { useViews } from "./hooks/useViews";
export { usePlatform, useProcess } from "./hooks/node";
