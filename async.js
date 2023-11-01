async function minhaFuncao() {
    let promise = new Promise(cumprida => {
        setTimeout(() => cumprida('Acabei aqui'), 2000);
    });
    return promise;
}

async function funcaoPrincipal() {
    console.log('Inicio');
    console.log(await minhaFuncao());
    console.log('Fim');
}

funcaoPrincipal();