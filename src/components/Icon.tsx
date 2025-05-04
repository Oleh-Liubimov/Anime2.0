import { icons } from "lucide-react-native";
import { MotiProps } from "moti";
import { motifySvg } from "moti/svg";

export type IconNames = keyof typeof icons;
interface IIconProps extends MotiProps {
  name: IconNames;
  size?: number;
}

export const Icon = ({ name, size, ...rest }: IIconProps) => {
  const IconComponent = motifySvg(icons[name])();

  return <IconComponent size={size} {...rest} />;
};
