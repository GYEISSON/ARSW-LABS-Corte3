## ESCUELA COLOMBIANA DE INGENIERÍA JULIO GARAVITO

## Arquitectura de Software - ARSW 

## Escalamiento en Azure con Maquinas Virtuales, Sacale Sets y Service Plans

## Integrante 

### yeisson Gualdron

#### Para el proceso de creación, de la maquina virtual en Azure seguí los siguientes pasos

![](images/creating1.png)

![](images/creating2.png)

![](images/creating3.png)

#### Luego de la creación azure nos notifica la maquina virtual se creo y desplego correctamente

![](images/created1.png)

#### 1. Para conectarnos a la maquina virtual utilizamos el protocolo ssh, y el sisguiente comando

![](images/conection.png)

#### 2. Proceso de instalación 

![](images/nodeInstall.png)

![](images/nodeInstall2.png)

#### 3. creamos un repositorio en git y lo clonamos dentro de la VM y luego ejecutamos npm install

![](images/fibonacciApp.png)

#### 4. instalamos forever y ejecutamos la aplicacion 

![](images/foreverInstall.png)

![](images/foreverStart.png)

#### 5.Antes de verificar si el endpoint funciona, en Azure vaya a la sección de *Networking* y cree una *Inbound port rule* tal como se muestra en la imágen.
![](images/port3000.png)

####  Para verificar que la aplicación funciona, use un browser y user el endpoint `http://xxx.xxx.xxx.xxx:3000/fibonacci/6`. La respuesta debe ser `The answer is 8`.

![](images/fib6.png)



#### 7. La función que calcula en enésimo número de la secuencia de Fibonacci está muy mal construido y consume bastante CPU para obtener la respuesta. Usando la consola del Browser documente los tiempos de respuesta para dicho endpoint usando los siguintes valores:

    * 1000000 : 
    * 1010000 :
    * 1020000 :
    * 1030000 : 
    * 1040000 : 
    * 1050000 : 
    * 1060000 : 
    * 1070000 : 
    * 1080000 : 
    * 1090000 :

#### 8. Dírijase ahora a Azure y verifique el consumo de CPU para la VM. (Los resultados pueden tardar 5 minutos en aparecer). 

![](images/cpu1.png)

#### 9. Ahora usaremos Postman para simular una carga concurrente a nuestro sistema. Siga estos pasos.

![](images/cpu1.png)

![](images/vm1.png)

![](images/.png)
