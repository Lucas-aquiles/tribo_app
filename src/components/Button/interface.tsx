export interface ButtonStyle {
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
}

export interface ButtonInterface {
  txtBtn: string;
  style?: ButtonStyle;
  onPress: Function;
}
