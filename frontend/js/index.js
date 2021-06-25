/*(function($){
    function app(){
        const ajax = new XMLHttpRequest();
        return{
            init : function init(){
                this.getTableRange()
                this.getGameInfo()
                this.submitBets()
            }
        }
        function submitBets(){
            $('[id="car-info-form"]').on('submit', this.createNewCar)
        }
        function getGameInfo(){
            ajax.open('GET', '../json/games.json')
            ajax.send()
            ajax.addEventListener('readystatechange', displayGameInfo,false)
        }
        
        function displayGameInfo(){
            if(!(this.readyState === 4 && this.status === 200)) return
            const data = JSON.parse(this.responseText)
        }


    }
})(window.DOM)*/