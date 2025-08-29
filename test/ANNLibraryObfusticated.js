/*

------- Artaficial Neural Network Library -------
           ------- By: TASGuy -------

**INSTRUCTIONS:**

Set your variable like this:
const ANNVariable = new ArtificialNerualNetwork(layerSizes, activationFunctions, learningRate);
layerSizes is an array of numbers determining how many nodes are on that layer, this includes the input and output layers as well as the hidden layers.
So if you had 4 inputs, 2 outputs, you might do something like this: [4, 7, 6, 2].
activationFunctions can either be a string or an array of strings. If it's a string, it's the activation function for the whole Neural Network. ("ReLU", "Sigmoid", "LeakyReLU", "Tanh" are your options.)
If it's an array, the first string determines the activation function for all of them but the output layer, then the next determines the output layer's activation function.
learningRate is a number between 0 and 1 determining how much the Neural Network takes in new training data.

Then you can use:
ANNVariable.train(inputs, wantedOutput);
and:
ANNVariable.feedForward(inputs);
The train function trains the Neural Network, and the feedForward function returns all the activated Neurons. (If you want to know exactly what it returns, try an example to show yourself.)

Bellow is an example to show you what the library can do.


**EXAMPLE:**

// Example usage
const ANN = new ArtificialNeuralNetwork([3, 5, 3], ['ReLU', 'Sigmoid'], 0.05);

let trained = false;
let patience = 0;
while (!trained && patience < 50000) {
    let inputs = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())];
    ANN.train(inputs, inputs);

    let out = ANN.feedForward(inputs).activations.pop();
    let rounded = out.map(x => Math.round(x));

    if (JSON.stringify(inputs) === JSON.stringify(rounded)) {
        patience++;
    } else {
        patience = 0;
    }

    if (patience > 25) {
        console.log("Trained.");
        trained = true;
    }
}
for (let i = 0; i < 10; i++) {
    let inputs = [Math.round(Math.random()), Math.round(Math.random()), Math.round(Math.random())];
    let output = ANN.feedForward(inputs);
    //console.log(inputs, output.activations.pop().map(num => Math.round(num)));
    console.log(JSON.stringify(inputs) === JSON.stringify(output.activations.pop().map(num => Math.round(num))));
}

*/

const _0x493330=_0xdc72;function _0x30ac(){const _0x1d2df1=['feedForward','LeakyReLU','1thvtvW','learningRate','1208772jHNURA','max','activate','length','1053785TXOMme','Tanh','map','random','bind','4axgLQH','66924GkSUTk','weights','activateDerivative','1824405qpAtbr','activation','20gfiHwO','from','push','tanh','5041840sTPCBi','exp','biases','layerSizes','1482964JhkGQR','Sigmoid','314396hSidFJ'];_0x30ac=function(){return _0x1d2df1;};return _0x30ac();}(function(_0x36aa29,_0x449179){const _0x552e84=_0xdc72,_0x53dfb8=_0x36aa29();while(!![]){try{const _0x247a46=parseInt(_0x552e84(0x11a))/0x1*(parseInt(_0x552e84(0x135))/0x2)+parseInt(_0x552e84(0x129))/0x3*(parseInt(_0x552e84(0x125))/0x4)+parseInt(_0x552e84(0x120))/0x5+-parseInt(_0x552e84(0x11c))/0x6+parseInt(_0x552e84(0x133))/0x7+-parseInt(_0x552e84(0x12f))/0x8+-parseInt(_0x552e84(0x126))/0x9*(parseInt(_0x552e84(0x12b))/0xa);if(_0x247a46===_0x449179)break;else _0x53dfb8['push'](_0x53dfb8['shift']());}catch(_0x544652){_0x53dfb8['push'](_0x53dfb8['shift']());}}}(_0x30ac,0x53582));function _0xdc72(_0x31d6e0,_0x98f7e8){const _0x30ac46=_0x30ac();return _0xdc72=function(_0xdc7275,_0x201d00){_0xdc7275=_0xdc7275-0x11a;let _0x5d8ab6=_0x30ac46[_0xdc7275];return _0x5d8ab6;},_0xdc72(_0x31d6e0,_0x98f7e8);}class ArtificialNeuralNetwork{constructor(_0x1c8e04,_0x25ce6b=_0x493330(0x134),_0x1e2d3b=0.1){const _0xc1be41=_0x493330;this['layerSizes']=_0x1c8e04,this[_0xc1be41(0x11b)]=_0x1e2d3b,this[_0xc1be41(0x12a)]=_0x25ce6b,this[_0xc1be41(0x127)]=[],this[_0xc1be41(0x131)]=[];for(let _0x52a14a=0x0;_0x52a14a<_0x1c8e04[_0xc1be41(0x11f)]-0x1;_0x52a14a++){this[_0xc1be41(0x127)][_0xc1be41(0x12d)](Array[_0xc1be41(0x12c)]({'length':_0x1c8e04[_0x52a14a+0x1]},()=>Array['from']({'length':_0x1c8e04[_0x52a14a]},()=>Math[_0xc1be41(0x123)]()*0x2-0x1))),this[_0xc1be41(0x131)][_0xc1be41(0x12d)](Array['from']({'length':_0x1c8e04[_0x52a14a+0x1]},()=>Math['random']()*0x2-0x1));}}[_0x493330(0x11e)](_0x3e3b11){const _0x103b31=_0x493330;switch(this['activation']){case _0x103b31(0x134):return 0x1/(0x1+Math[_0x103b31(0x130)](-_0x3e3b11));case _0x103b31(0x121):return Math[_0x103b31(0x12e)](_0x3e3b11);case'ReLU':return Math[_0x103b31(0x11d)](0x0,_0x3e3b11);case'LeakyReLU':return _0x3e3b11>0x0?_0x3e3b11:0.01*_0x3e3b11;default:return _0x3e3b11;}}['activateDerivative'](_0x39dc8c){const _0x2f14fe=_0x493330;switch(this[_0x2f14fe(0x12a)]){case _0x2f14fe(0x134):{let _0x4d39e7=0x1/(0x1+Math[_0x2f14fe(0x130)](-_0x39dc8c));return _0x4d39e7*(0x1-_0x4d39e7);}case _0x2f14fe(0x121):return 0x1-Math[_0x2f14fe(0x12e)](_0x39dc8c)**0x2;case'ReLU':return _0x39dc8c>0x0?0x1:0x0;case _0x2f14fe(0x137):return _0x39dc8c>0x0?0x1:0.01;default:return 0x1;}}['feedForward'](_0x4d7361){const _0x592e5c=_0x493330;let _0x4ffd75=[_0x4d7361],_0x53dbdc=[];for(let _0x29e5d6=0x0;_0x29e5d6<this[_0x592e5c(0x127)][_0x592e5c(0x11f)];_0x29e5d6++){let _0x58b30c=this[_0x592e5c(0x127)][_0x29e5d6][_0x592e5c(0x122)]((_0x1998f9,_0x1e703d)=>{const _0x1a9e04=_0x592e5c;let _0x496551=this['biases'][_0x29e5d6][_0x1e703d];for(let _0x32dc5d=0x0;_0x32dc5d<_0x1998f9[_0x1a9e04(0x11f)];_0x32dc5d++){_0x496551+=_0x1998f9[_0x32dc5d]*_0x4ffd75[_0x29e5d6][_0x32dc5d];}return _0x496551;});_0x53dbdc['push'](_0x58b30c);let _0x210c72=_0x58b30c[_0x592e5c(0x122)](this['activate'][_0x592e5c(0x124)](this));_0x4ffd75[_0x592e5c(0x12d)](_0x210c72);}return{'activations':_0x4ffd75,'zs':_0x53dbdc};}['train'](_0x41eee7,_0xcf390a){const _0x5c035b=_0x493330;let {activations:_0x4bca60,zs:_0x13279b}=this[_0x5c035b(0x136)](_0x41eee7),_0x15266a=_0x4bca60['at'](-0x1)[_0x5c035b(0x122)]((_0x135a54,_0x457844)=>(_0x135a54-_0xcf390a[_0x457844])*this[_0x5c035b(0x128)](_0x13279b['at'](-0x1)[_0x457844])),_0x538e47=[_0x15266a];for(let _0x5899db=this[_0x5c035b(0x127)]['length']-0x2;_0x5899db>=0x0;_0x5899db--){let _0x59e223=[];for(let _0x354b7a=0x0;_0x354b7a<this[_0x5c035b(0x132)][_0x5899db+0x1];_0x354b7a++){let _0xdcc8f7=0x0;for(let _0x2aa7ff=0x0;_0x2aa7ff<this[_0x5c035b(0x132)][_0x5899db+0x2];_0x2aa7ff++){_0xdcc8f7+=this['weights'][_0x5899db+0x1][_0x2aa7ff][_0x354b7a]*_0x538e47[0x0][_0x2aa7ff];}_0xdcc8f7*=this['activateDerivative'](_0x13279b[_0x5899db][_0x354b7a]),_0x59e223[_0x5c035b(0x12d)](_0xdcc8f7);}_0x538e47['unshift'](_0x59e223);}for(let _0x5fdf64=0x0;_0x5fdf64<this[_0x5c035b(0x127)][_0x5c035b(0x11f)];_0x5fdf64++){for(let _0x18d4e5=0x0;_0x18d4e5<this[_0x5c035b(0x127)][_0x5fdf64][_0x5c035b(0x11f)];_0x18d4e5++){for(let _0x3db454=0x0;_0x3db454<this['weights'][_0x5fdf64][_0x18d4e5][_0x5c035b(0x11f)];_0x3db454++){this[_0x5c035b(0x127)][_0x5fdf64][_0x18d4e5][_0x3db454]-=this[_0x5c035b(0x11b)]*_0x538e47[_0x5fdf64][_0x18d4e5]*_0x4bca60[_0x5fdf64][_0x3db454];}this[_0x5c035b(0x131)][_0x5fdf64][_0x18d4e5]-=this[_0x5c035b(0x11b)]*_0x538e47[_0x5fdf64][_0x18d4e5];}}}}
