# Beckhoff-automated-sorting-system-with-motion-control

![image](https://github.com/user-attachments/assets/6428dd24-0d1b-4717-aa35-aaa21168ee71)



![Image24](https://github.com/user-attachments/assets/06cc5f61-6395-4a58-bc9c-a62c4052ce44)


This system automates the measuring and sorting process for items based on size and material. The system contains digital inputs, digital outputs, analog inputs, analog outputs, servo motor for precise control, communication between two Siemens PLC with TSEND_C and TRCV_C function blocks, HMI for display and control, OPC-UA communication between NodeJs application and Siemens PLC, NodeJs HTTP server to receive the HTTP request from React client application, web application with React for monitoring and control of the system remotely, PostgreSql to store data in database.

![image](https://github.com/user-attachments/assets/299110dd-fee4-43ca-92d7-b0f2a4fba107)


First step: The labourer or a robot places the item on the inverter controlled conveyor. The conveyor conveys the item forward.

Second step: An analog sensor measures the size of the item. It can be small and non metal item, small and metal, large and non metal, large and metal.

Third step: An inductive sensor checks if the item is metallic.

Fourth step: An analog load cell measures the weight of the item.

Fifth step: The item moves forward on a servo controlled table and the servo motor moves this table to the accurate position.

Sixth step: After reaching the appropriate position a cyclinder pushes the item in the expected bin for further process.

![image](https://github.com/user-attachments/assets/3dba5d68-63f3-4a0c-854e-e54f818e60fd)


Bin 1:	Small and non metal. The size is between 10cm and 20cm and the weigth is less then 5kg and non metal.

Bin 2:	Small and metal. The size is between 10cm and 20cm and the weigth is less then 5kg and metal.

Bin 3:	Large and non metal. The size is more then 20cm and the weight is more then 5kg and non metal.

Bin 4:	Large and metal. The size is more then 20cm and the weight is more then 5kg and metal.


![image](https://github.com/user-attachments/assets/884ace3b-d37e-4754-8750-5ad7aa9c4aeb)


PLC1: It controls the the measuring and sorting system. It is an OPC-UA server to communicate with the NodeJs javascript based OPC-UA client. It communicates with PLC2 with TSEND_C and TRCV_C open user communication.

PLC2: It is part of an other system and it controls the further processes after the item get into the expected bin. An optical sensor checks the saturation of each bin and sends this boolean variable to PLC1. If one of the bins are full, the item doest'n move on the servo based table because a cylinder holds the item in place at the end of the inverter controlled conveyor.

HMI: It indicates the sensors, the position of the item, the state of cylinders, the position of servo controlled table and the labourer can manage the system for example start or stop the progress.

NodeJs javascripts based application: It is an OPC-UA client to send and receive data from PLC1. It is a HTTP server too, and the data from the PLC1 are sent to React application via HTTP protocoll.

React: It is a javascript based frontend application. The states of the system can be ckecked in the browser remotely from anywhere. Just type the ip address of the React application and the system can be monitored and managed from anywhere.

PostgreSql server: It holds the data in datatables.

![image](https://github.com/user-attachments/assets/b5af0f9d-c7bf-4b7a-8ef0-4eae5113bfa6)


Network1 contains PLC1, PLC2, servo drive and HMI.

Network2 contains the NodeJs application

Network3 contains the PostgreSql server.

Network4 contains the React application.

![image](https://github.com/user-attachments/assets/c6fa57cf-2367-4d0c-872f-12f5ee897fe5)

![image](https://github.com/user-attachments/assets/e4d9956c-7da2-42ef-ad3e-463fb4dbc924)

![image](https://github.com/user-attachments/assets/76baa081-a7ec-4f08-adf6-6c8e844b9621)

![image](https://github.com/user-attachments/assets/64882e8a-e933-4e6c-8e7a-f088d039b6d0)

![image](https://github.com/user-attachments/assets/c297853b-4e4d-4392-8f76-1fbe626f571d)

![image](https://github.com/user-attachments/assets/dea1ace9-7fbb-4e59-b6f6-0c3d5a3d7bac)

Function, function blocks, global variable lists, motion objects and HMI screens in TwinCAT:

![image](https://github.com/user-attachments/assets/7f9e40c6-864c-44e6-aace-d146ac12be8e)

![image](https://github.com/user-attachments/assets/7ab7670c-3f55-49ae-89eb-261087a505f1)

Main screen in the HMI after pushing the control 24V button for two seconds. There is 24V for the output modules and this is indicated by the blue light (for test case, on the screen) and the text on the screen.

![image](https://github.com/user-attachments/assets/61fb9d47-e54d-4e33-878f-f1e0d2ded1f8)

In order to start the conveyor switch the automatic mode and push the Start conveyor button for 2 seconds. The yellow light shows that the conveyor moves.

![image](https://github.com/user-attachments/assets/0740191c-27fb-4b91-bd4a-726c6f5d94f4)

Put the item on the conveyor. The item starts and the green light goes on indicating that there is an item in the system and the yellow light goes off. The program mesures the size and weight and decides the material. Finally calculating the breed from the previous data.

![image](https://github.com/user-attachments/assets/feea1371-878d-4aab-affa-3913bfa6e6f0)

If the table is at home position and the proper bin is not full (this data comes from PLC2 using TCP/IP communication with TSEND and TRCV blocks) then the cylinder in the end of the conveyor moves backward and the item moves on the table. The servo motor carries the table to the appropriate postion. In this example the item is small and metal, so it should be moved to bin 2.

![image](https://github.com/user-attachments/assets/6c4ca44b-16fe-40f4-8fe9-199dd0c5fd87)

If the bin is not full (this data comes from PLC2 using TCP/IP communication with TSEND and TRCV blocks) the cylinder situated on the table pushes the item into the bin. If the item passes in front of the sensor during heading towards the bin and the cylinder in back position on the servo controlled table, the table moves back to home position and the cycle end. There is no item in the system any more.

![image](https://github.com/user-attachments/assets/61fb9d47-e54d-4e33-878f-f1e0d2ded1f8)

This is the plain operation but I have been adding new functions to the system to practise as many things as I can and creating a more complex project with more and more logic.

Inputs screen in the HMI: You can see on this screen the inputs from the sensors. I can add as many sensors as I can. More inputs are the same as these ones.

Manual motion screen in the HMI: You can control the outputs by manual on this screen. I can add as many outputs as I can. More outputs are the same as these ones.

Servo motion screen in the HMI: You can move the servo motor by manual on this screen. By typing the jog velocity in the input field and clicking the Jog+ or Jog-, you can move the servo controlled table forward or backward. By clicking the Home button, the tables moves to home. By clicking the Bin1 button, the tables moves to the position of bin 1. Bin2, Bin3 and Bin4 buttons have the same function.

If the table is not in the right position for any reason: Move the table with Jog+ and Jog- buttons to the appropriate position and click Bin1, Bin2, Bin3 or Bin4 button beneath "Save new position" text. After the table moves to this new position.

![image](https://github.com/user-attachments/assets/8d93aa64-3396-49e1-8b2a-63c2605eb077)

Menu in react web application:
The system can be reached from anywhere by the web browser using OPC-UA and HTTP communication. I can make the same functionality as the HMI has with any inputs, outputs, texts and information. I've created just the main menu in this application and the basic communication between react and nodeJs and between nodeJs and the PLC. I will add functions to this application, but now I focus on the PLC side.

![image](https://github.com/user-attachments/assets/9eb436e0-f119-4e9e-8563-3abbf0c77789)


