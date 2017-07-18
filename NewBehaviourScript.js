#pragma strict

import System.IO.Ports;
var sp = new SerialPort();
sp.BaudRate = 9600;
sp.PortName ="COM4";


var speed=4;
var amountToMove=5;
 
function Start () {
    //OpenConection();
    sp.Open();
    //sp.Close()= 1;
}

// Update is called once per frame
function Update() {
    amountToMove = speed * Time.deltaTime;
    if (sp.IsOpen)
    {
        MoveObject(sp.ReadByte());
        print(sp.ReadByte());
    }
     else {(sp.Close());}
}
    
function MoveObject(Direction)
    { if (Direction == 1)
    {
        transform.Translate(Vector3.left * amountToMove, Space.World);
    }
        { if (Direction == 2)

        transform.Translate(Vector3.left * amountToMove, Space.World);
        }
    }



