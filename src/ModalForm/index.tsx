import { Body } from './components/Body';
import { Cancel } from './components/Cancel';
import { Content } from './components/Content';
import { Field } from './components/Field';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Submit } from './components/Submit';
import { Trigger } from './components/Trigger';
import { ModalFormRoot } from './ModalFormRoot';

const ModalFormWithComponents = ModalFormRoot as typeof ModalFormRoot & {
  Trigger: typeof Trigger;
  Content: typeof Content;
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
  Field: typeof Field;
  Cancel: typeof Cancel;
  Submit: typeof Submit;
};

ModalFormWithComponents.Trigger = Trigger;
ModalFormWithComponents.Content = Content;
ModalFormWithComponents.Header = Header;
ModalFormWithComponents.Body = Body;
ModalFormWithComponents.Footer = Footer;
ModalFormWithComponents.Field = Field;
ModalFormWithComponents.Cancel = Cancel;
ModalFormWithComponents.Submit = Submit;

export const ModalForm = ModalFormWithComponents;
