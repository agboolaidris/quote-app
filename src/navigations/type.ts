export type AuthorsStackParams = {
  authories: undefined;
  author: {
    id: string;
  };
};

export type CategoriestackParams = {
  categories: undefined;
  category: {
    id: string;
  };
};

export type RootTabParams = {
  home: undefined;
  categoriesStack: CategoriestackParams;
  authorsStack: AuthorsStackParams;
};
