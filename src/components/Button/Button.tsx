import { withGlobalConfig } from "../../hooks";
// import button from package and turn it into a global config component
import { Button as PackageButton } from "../../packages/Button/src";

const Button = withGlobalConfig(PackageButton, "button");
type ButtonProps = React.ComponentProps<typeof Button>;

export { Button, ButtonProps };
