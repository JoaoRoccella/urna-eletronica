function startLoop() {

    do {
        
        if (confirm('Encerrar o loop?')) {
            
            break;
            
        }
        
    } while (true);

    console.log('Saiu do loop');
}