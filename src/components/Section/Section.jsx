import css from './Section.module.css';

export const Title = ({ children }) => {
  return <h1 className={css.title}>{children}</h1>;
};
