async function minhaFuncao() {
    const promessa = new Promise(cumprida => {
        setTimeout(() => cumprida('Acabei aqui'), 2000);
    });
    return promessa;
}

async function funcaoPrincipal() {
    console.log('Inicio');
    console.log(await minhaFuncao());
    console.log('Fim');
}

funcaoPrincipal();