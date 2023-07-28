export const FormRegister = () => {
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input type="text" placeholder="Digite aqui seu nome" />
      </label>
      <label htmlFor="name">
        Email
        <input type="email" placeholder="Digite aqui sua senha" />
      </label>
      <label htmlFor="name">
        Senha
        <input type="password" placeholder="Digite novamente sua senha" />
      </label>
      <label htmlFor="name">
        Confirmar Senha
        <input type="password" />
      </label>
      <label htmlFor="name">
        Bio
        <input type="text" placeholder="Fale sobre você" />
      </label>
      <label htmlFor="name">
        Contato
        <input type="text" placeholder="Opção de contato" />
      </label>
      <label htmlFor="name">
        Selecionar Módulo
        <select>
          <option value="">Primeiro módulo (Introdução ao Frontend)</option>
          <option value="">Segundo módulo (Frontend Avançado)</option>
          <option value="">Terceiro módulo (Introdução ao Backend)</option>
          <option value="">Quarto módulo (Backend Avançado)</option>
        </select>
      </label>
    </form>
  );
};
