class Cliente{
    constructor(pNome,pEndereco){
        this.Nome = pNome;
        this.Endereco = pEndereco;
    }
    get Nome(){
        return this.Nome;
    }
    set Nome(pNome){
        this.Nome = pNome;
    }
    get Endereco(){
        return this.Endereco;
    }
    set Endereco(pEndereco){
        this.Endereco = pEndereco;
    }

}
class PessoaFisica extends Cliente{
    constructor(pNome,pEndereco,pCpf,pDataNascimento){
        super(pNome,pEndereco);
        this.Cpf = pCpf;
        this.DataNascimento = pDataNascimento;
    }
    get Cpf(){
        return this.Cpf;
    }
    set Cpf(pCpf){
        this.Cpf = pCpf;
    }
    get DataNascimento(){
        return this.DataNascimento;
    }
    set DataNascimento(pDataNascimento){
        this.DataNascimento = pDataNascimento;
    }


}
class PessoaJuridica extends Cliente{
    constructor(pNome,pEndereco,pCnpj,pRazaoSocial){
        super(pNome,pEndereco);
        this.Cnpj = pCnpj;
        this.RazaoSocial = pRazaoSocial;
    }
    get Cnpj(){
        return this.Cnpj;
    }
    set Cnpj(pCnpj){
        this.Cnpj = pCnpj;
    }
    get RazaoSocial(){
        return this.RazaoSocial;
    }
    set RazaoSocial(pRazaoSocial){
        this.RazaoSocial = pRazaoSocial;
    }
}