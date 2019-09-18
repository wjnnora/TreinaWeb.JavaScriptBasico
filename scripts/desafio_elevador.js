var elevador = {
    total_andares: 5,
    andar_atual: 0,
    up: function () {
        if (this.andar_atual < this.total_andares) {
            this.andar_atual += 1;
            setTimeout(() => {
                console.log("Subindo...");
            }, 500);
        }
        console.log('Andar atual: ' + this.andar_atual);
    },
    down: function () {
        if (this.andar_atual > 0) {
            this.andar_atual -= 1;
            setTimeout(() => {
                console.log("Descendo...");
            }, 500);
            console.log('Andar atual: ' + this.andar_atual);
        }
    },
    current_floor: function () {
        console.log('Andar atual: ' + this.andar_atual);
    }
}