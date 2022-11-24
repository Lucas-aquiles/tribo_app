export interface InputStyle {
  borderColor: string;
  borderWidth: number;
  backgroundColor: string;
}

export interface InputInterface {
  placeholder: string;
  keyboardType: keyboardTypeOptions;
  secureTextEntry?: boolean;
  style?: InputStyle;
  value: string;
  onChangeText: ((text: string) => void) | undefined;
  status?: boolean;
  check?: boolean;
}

export type keyboardTypeOptions = 'email-address' | 'phone-pad' | 'default';
