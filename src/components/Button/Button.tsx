import { withGlobalConfig } from "../../hooks";
import { Button as PackageButton } from "../../packages";

const Button = withGlobalConfig(PackageButton, "button");

export { Button };
