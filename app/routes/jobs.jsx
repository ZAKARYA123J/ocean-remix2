import { useTranslation } from "react-i18next";

export default function Jobs() {
  let { t } = useTranslation();
  return <h1>{t('welcome')}</h1>;
}