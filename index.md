# George Erol Fouché Portfolio

## Data Pipeline Projects
1. [IOT AWS SPARK (Big Data)](#IOTAWSSPARK)
2. [E2E Spark Flow (Big Data)](#Spark)
3. [Commercing With Flink (Big Data)](#Flink)

## Robotics Projects
1. [Deep Learning Drone Simulator (Deep Learning & Simulation)](#Deep)
2. [Search And Sample Rover (Computer Vision & Simulation)](#Rover)
3. [Robotic Perception (Computer Vision & Simulation)](#Perception)
4. [Robotic Arm Pick and Drop (ROS & Simulation)](#Arm)
5. [Self-Driving Car Behavioral Cloning (Deep Learning & Simulation)](#Cloning)
6. [Map a World with Slam and a Custom Robot (ROS & Simulation)](#Slam)
7. [BlueBot (Android & Arduino)](#BlueBot)
8. [Vehicle Detection (Machine Learning)](#VehicleDetection)
9. [Advanced Lane Finding (Computer Vision)](#ADL)
10. [Deep Reinforcement Learn Arm Manipulation (Deep Reinforcement Learning)](#DRLARM)

## Native Mobile Projects
1. [Weather App (Android & iOS)](#Weather)
2. [Bitcoin Ticker (Android & iOS)](#Ticker)

## Full Stack Web Development
1. [Todo Application with React (Front End) & Spring Boot (Back End)](#TodoApp)
2. [Expense Application with React (Front End) & Spring Boot (Back End)](#ExpenseApp)
3. [Server Side Rendering Program Management Application with Spring MVC & Spring Boot](#PmApp)

### Data Pipeline

#### IOT AWS SPARK(Big Data)<a name="IOTAWSSPARK"></a>
This project integrates Big Data, IoT, and cloud computing to enhance urban mobility. It uses a 35-mile drive from San Francisco to Dublin, CA, as a case study. It demonstrates how real-time data on vehicle performance, GPS, weather, traffic, and emergencies can optimize routes, reduce travel time, and improve safety.

The architecture is scalable, fault-tolerant, and supports real-time processing. Docker deploys Zookeeper, Kafka, and 
Spark in a master-worker setup, while AWS manages storage, data warehousing, and analytics, with IoT for data collection.

![IOTAWSSPARK](./images/SystemArchitecture.png)

**[GitHub:IOT AWS SPARK](https://github.com/georgeerol/IotAwsSpark)**

#### E2E Spark Flow <a name="Spark"></a>
This project utilizes Docker, Apache Airflow, Kafka, Spark, Cassandra, and PostgreSQL to manage data throughout its lifecycle.

![E2E Spark Flow](./images/SparkFlowArchitecture.png)

**[GitHub: E2E Spark Flow](https://github.com/georgeerol/E2ESparkFlow)**

#### Commercing With Flink <a name="Flink"></a>
Designed for real-time sales analytics, this Apache Flink application processes financial transactions, executing aggregations and storing results for analysis.

![CommercingWithFlink](./images/CommercingWithFlinkArchitecture.png)

**[GitHub: Commercing With Flink](https://github.com/georgeerol/CommercingWithFlink)**

### Robotics

#### Deep Learning Drone Simulator <a name="Deep"></a>
Train a neural network for a "follow me" feature in drones, applicable to autonomous vehicles and industrial robotics.

![DeepLearningDroneSimulator](./images/sim_screenshot.png)

**[GitHub: Deep Learning Drone Simulator](https://github.com/fouliex/DeepLearningDroneSimulator)**

#### Search And Sample Rover <a name="Rover"></a>
Navigate and map terrains autonomously using real-time camera images to guide the rover.

![SearchAndSampleRover](./images/rover_image.gif)

**[GitHub: Search And Sample Rover](https://github.com/fouliex/SearchAndSampleRoverProject)**

#### Robotic Perception <a name="Perception"></a>
Tackle the challenge of object recognition and manipulation in cluttered environments inspired by the Amazon Robotics Challenge.

![Robotic Perception](./images/PR2.gif)

**[GitHub: Robotic Perception](https://github.com/fouliex/RoboticPerception)**

#### Robotic Arm Pick and Drop <a name="Arm"></a>
Control a six-degree freedom robotic arm to perform precise pick and drop actions using kinematics.

![RoboticArmPickDrop](./images/PickAndDrop.gif)

**[GitHub: Robotic Arm Pick and Drop](https://github.com/fouliex/RoboticArmPickAndDrop)**

#### Self-Driving Car Behavioral Cloning <a name="Cloning"></a>
Learn driving behavior using deep neural networks to simulate real-world driving conditions in a test environment.

![SelfDrivingCarBehavioralCloning](./images/SelfDrivingCarBehavioralCloning.gif)

**[GitHub: Self-Driving Car Behavioral Cloning](https://github.com/fouliex/SelfDrivingCarBehavioralCloning)**

#### Map a World with Slam and a Custom Robot <a name="Slam"></a>
Implement SLAM to navigate and map environments with a custom robot using RTAB-MAP for real-time localization.

![MapAWorldWithSlamAndACustomRobot](./images/MapAWorldWithSlamAndACustomRobot.gif)

**[GitHub: Map a World with Slam and a Custom Robot](https://github.com/fouliex/MapAWorldWithSlamAndACustomRobot)**

#### BlueBot <a name="BlueBot"></a>
A Bluetooth-controlled robotic project integrating Arduino and Android for remote operations.

![bluebot](./images/bluebot.gif)

**[GitHub: BlueBot](https://github.com/fouliex/BlueBot)**

#### Vehicle Detection <a name="VehicleDetection"></a>
Develop a software pipeline to detect vehicles in a video stream effectively.

![VehicleDetection](./images/vehicleDetection.gif)

**[GitHub: VehicleDetection](https://github.com/georgeerol/VehicleDetection)**

#### Advanced Lane Finding <a name="ADL"></a>
Enhance road safety by detecting lane markings accurately even under varying road conditions.

![AdvanceLaneFinding](./images/AdvanceLaneFinding.gif)

**[GitHub: Advanced Lane Finding](https://github.com/georgeerol/AdvancedLaneFinding)**

#### Deep Reinforcement Learn Arm Manipulation <a name="DRLARM"></a>
Train a robotic arm to perform precise manipulations using deep reinforcement learning techniques.

![Objective1](./images/Objective1.gif)
![Objective2](./images/Objective2.gif)

**[GitHub: Deep Reinforcement Learn Arm Manipulation](https://github.com/georgeerol/DeepRLArmManipulation)**

### Native Mobile Projects

#### Weather App <a name="Weather"></a>
A cross-platform weather application providing real-time weather updates for Android and iOS.

![weather](./images/Clima.png)

**[GitHub: Android Weather App](https://github.com/georgeerol/AndroidAndIOSApps/tree/master/ClimaApp/Android/Clima)**
**[GitHub: iOS Weather App](https://github.com/georgeerol/AndroidAndIOSApps/tree/master/ClimaApp/IOS/Clima)**

#### Bitcoin Ticker <a name="Ticker"></a>
Monitor and display live Bitcoin exchange rates on Android and iOS devices.

![Bitcoin Ticket Image](./images/BitcoinTicker.png)

**[GitHub: Android Bitcoin Ticker](https://github.com/georgeerol/AndroidAndIOSApps/tree/master/BitcoinTickerApp/Android/BitcoinTicker)**
**[GitHub: iOS Bitcoin Ticker](https://github.com/georgeerol/AndroidAndIOSApps/tree/master/BitcoinTickerApp/IOS/BitcoinTicker)**

### Full Stack Web Development

#### Todo Application with React & Spring Boot <a name="TodoApp"></a>
Manage daily tasks efficiently with a user-friendly interface and robust backend.

![TodoAppLoginPage](./images/LoginPage.png)
![TodoAppPage](./images/ToDoPage.png)

**[GitHub: Todo Application](https://github.com/georgeerol/ToDoApp)**

#### Expense Application with React & Spring Boot <a name="ExpenseApp"></a>
Track and manage expenses with an easy-to-use web application.

![ExpenseAppPage](./images/ExpensePage.png)

**[GitHub: Expense Application](https://github.com/georgeerol/ExpenseApp)**

#### Server Side Rendering Program Management Application with Spring MVC & Spring Boot <a name="PmApp"></a>
Efficiently manage projects and team assignments with a comprehensive program management tool.

![HomePage](./images/HomePage.png)
![EmployeesPage](./images/EmployeesPage.png)
![ProjectsPage](./images/ProjectsPage.png)

**[GitHub: Program Management App](https://github.com/georgeerol/ProjectManagementApp)**
