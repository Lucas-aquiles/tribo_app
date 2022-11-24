export interface TypeInput {
  multiline?: boolean;
  label?: string;
  value: string;
  onChange: ((text: string) => void) | undefined;
  editable?: boolean;

}

export interface TypePicker {
  title: string;
  name: string;
  textOne: string;
  textTwo: string;
  onChange?: Function;
}

export interface Props {
  width: number;
}
