-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 21, 2018 at 07:56 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 7.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `intra`
--

-- --------------------------------------------------------

--
-- Table structure for table `cordination`
--

CREATE TABLE `cordination` (
  `event_id` int(11) NOT NULL,
  `cord_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `eventfiles`
--

CREATE TABLE `eventfiles` (
  `Id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `eventfiles`
--

INSERT INTO `eventfiles` (`Id`, `fname`) VALUES
(68, 'dtd.PNG'),
(68, 'xsd.PNG'),
(69, 'vulnerabilities.PNG'),
(69, 'xsd.PNG'),
(69, 'xsl.PNG'),
(70, 'vulnerabilities.PNG'),
(70, 'xsd.PNG'),
(70, 'xsl.PNG'),
(72, 'que10.PNG'),
(73, 'que10.PNG'),
(75, 'que10.PNG'),
(75, 'que10.PNG'),
(76, 'que7.PNG'),
(76, 'que8.PNG'),
(76, 'que9.PNG'),
(77, 'que7.PNG'),
(77, 'que8.PNG'),
(77, 'que9.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Id` int(11) NOT NULL,
  `done` int(11) NOT NULL,
  `ename` varchar(500) NOT NULL,
  `edesc` varchar(500) NOT NULL,
  `date_from` date NOT NULL,
  `date_to` date NOT NULL,
  `time_from` time NOT NULL,
  `time_to` time NOT NULL,
  `location` varchar(100) NOT NULL,
  `exname` varchar(100) NOT NULL,
  `exdesc` varchar(500) NOT NULL,
  `sponsor` varchar(100) NOT NULL,
  `benifits` varchar(200) NOT NULL,
  `coordinator` varchar(200) NOT NULL,
  `Files-Total` int(11) NOT NULL,
  `Images-Total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`Id`, `done`, `ename`, `edesc`, `date_from`, `date_to`, `time_from`, `time_to`, `location`, `exname`, `exdesc`, `sponsor`, `benifits`, `coordinator`, `Files-Total`, `Images-Total`) VALUES
(1, 1, 'Expert lecture on Convergence and unified communications', '', '2014-09-16', '2014-09-16', '00:00:00', '00:00:00', '', '', '', 'TEQUIP', 'STUDENTS', '', 0, 0),
(2, 1, 'Industry and Institutions Interaction', '', '0000-00-00', '0000-00-00', '00:00:00', '00:00:00', '', '', '', 'TEQUIP', 'Nearly 300 Students from College all branch', '', 0, 0),
(18, 1, 'Web Technologies', 'Learn jQuery, AJAX and JSON', '2017-11-11', '2017-11-12', '08:00:00', '16:00:00', 'F Block Lab 8', 'Ronak Patel', 'BVMite', 'TEQUIP III', 'All CP Students', 'Kirti Sharma', 0, 0),
(19, 1, 'Test', 'Testing', '2017-11-05', '2017-11-07', '10:00:00', '14:00:00', 'asd', 'fgh', 'jkl', 'qwer', 'tyui', 'zxcv', 0, 0),
(20, 1, 'IoT', 'Learn IoT', '2017-10-30', '2017-11-08', '10:00:00', '12:00:00', 'LRUC', 'Pritesh Tandel', 'Ex-BVMite', 'TEQUIP III', 'All CP Students', 'Dr N M Patel', 0, 0),
(25, 1, 'Big Data using Hadoop', 'Learn Hadoop ', '2017-11-09', '2017-11-10', '08:00:00', '10:00:00', 'LRUC', 'xyz', 'He is an ex-BVMite', 'TEQUIP', 'CP Student', 'Pranay', 0, 0),
(26, 1, 'Testing Event', 'Surprise....', '2018-07-07', '2018-07-15', '09:30:00', '12:30:00', 'f blk', 'xyz', 'bov sara 6', 'febufieg', 'feohf', 'fdhfid', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `event_expert`
--

CREATE TABLE `event_expert` (
  `event_id` int(11) NOT NULL,
  `expert_id` varchar(10) NOT NULL,
  `e_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expert`
--

CREATE TABLE `expert` (
  `exp_id` varchar(6) NOT NULL,
  `exp_name` text NOT NULL,
  `Description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `F_ID` int(11) NOT NULL,
  `Name` varchar(10) NOT NULL,
  `Catagory` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`F_ID`, `Name`, `Catagory`) VALUES
(1, 'DGT', ''),
(2, 'MMV', ''),
(3, 'SAB', ''),
(4, 'PBS', ''),
(5, 'NMP', ''),
(6, 'MIH', ''),
(7, 'BAT', ''),
(8, 'HDV', ''),
(9, 'KJS', ''),
(10, 'UKJ', ''),
(11, 'MJJ', '');

-- --------------------------------------------------------

--
-- Table structure for table `faculty_data`
--

CREATE TABLE `faculty_data` (
  `F_ID` int(11) NOT NULL,
  `Username` varchar(30) NOT NULL,
  `Password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty_data`
--

INSERT INTO `faculty_data` (`F_ID`, `Username`, `Password`) VALUES
(1, 'DGT', '123456'),
(2, 'MMV', '123456'),
(3, 'SAB', '123456'),
(4, 'PBS', '123456'),
(5, 'NMP', '123456'),
(6, 'MIH', '123456'),
(7, 'HJV', '123456'),
(8, 'BAT', '123456'),
(9, 'KJS', '123456'),
(10, 'UKJ', '123456'),
(11, 'MJJ', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `manuals`
--

CREATE TABLE `manuals` (
  `sub_code` varchar(5) NOT NULL,
  `filename` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `manuals`
--

INSERT INTO `manuals` (`sub_code`, `filename`) VALUES
('CP301', 'CP301_manual.pdf'),
('CP303', 'CP303_manual.docx'),
('CP305', 'CP305_manual.docx');

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `sub_code` varchar(5) NOT NULL,
  `filename` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `marks`
--

INSERT INTO `marks` (`sub_code`, `filename`) VALUES
('CP301', 'CP301_marks.pdf'),
('CP305', 'CP305_marks.pdf'),
('', 'que10.PNG');

-- --------------------------------------------------------

--
-- Table structure for table `materials`
--

CREATE TABLE `materials` (
  `sub_code` varchar(5) NOT NULL,
  `filename` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `materials`
--

INSERT INTO `materials` (`sub_code`, `filename`) VALUES
('CP305', 'CP305_material3.docx');

-- --------------------------------------------------------

--
-- Table structure for table `notice`
--

CREATE TABLE `notice` (
  `notice_id` int(11) NOT NULL,
  `fac_name` varchar(100) NOT NULL,
  `semester` int(11) NOT NULL,
  `notice_title` varchar(100) NOT NULL,
  `notice_desc` varchar(1000) NOT NULL,
  `notice_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notice`
--

INSERT INTO `notice` (`notice_id`, `fac_name`, `semester`, `notice_title`, `notice_desc`, `notice_date`) VALUES
(30, 'KJS', 5, 'Web Technologies', 'External Exam Today', '2017-12-16'),
(31, 'DGT', 0, 'For All Students', 'Dear Students ', '2017-12-15'),
(32, 'KJS', 5, 'New Notice', 'about notice somethimg', '2017-12-16'),
(33, 'DGT', 0, 'Testing', 'After long time....', '2018-07-05');

-- --------------------------------------------------------

--
-- Table structure for table `notice_file`
--

CREATE TABLE `notice_file` (
  `id` int(11) NOT NULL,
  `fname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notice_file`
--

INSERT INTO `notice_file` (`id`, `fname`) VALUES
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(0, 'doubt.PNG'),
(21, 'doubt.PNG'),
(22, 'doubt.PNG'),
(23, 'cirti.JPG'),
(24, 'Capture3.JPG'),
(30, 'cirti.JPG'),
(31, 'que9.PNG'),
(32, 'cirti.JPG');

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `project_id` int(11) NOT NULL,
  `project_title` varchar(100) NOT NULL,
  `project_desc` varchar(1000) NOT NULL,
  `project_sem` int(2) NOT NULL,
  `project_guid` text NOT NULL,
  `project_type` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`project_id`, `project_title`, `project_desc`, `project_sem`, `project_guid`, `project_type`) VALUES
(1, 'Iot', 'Internet only thing based real time helpful project ', 8, 'kirti Sir', 'Final Year'),
(2, 'Shopping site', 'Spectacles selling site for best user interface and a large varity of glasses', 6, 'Mayur sir', 'Web Technology');

-- --------------------------------------------------------

--
-- Table structure for table `sponser`
--

CREATE TABLE `sponser` (
  `event_id` int(11) NOT NULL,
  `sponser_name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_detail`
--

CREATE TABLE `student_detail` (
  `stu_id` varchar(8) NOT NULL,
  `password` varchar(10) NOT NULL,
  `stu_name` text NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subjects`
--

CREATE TABLE `subjects` (
  `sub_code` varchar(5) NOT NULL,
  `sub_name` text NOT NULL,
  `semester` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject_faculty`
--

CREATE TABLE `subject_faculty` (
  `S_ID` int(11) NOT NULL,
  `Year` int(11) NOT NULL,
  `ID` int(11) NOT NULL,
  `F_ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `syllabus`
--

CREATE TABLE `syllabus` (
  `ID` int(11) NOT NULL,
  `Code` varchar(10) NOT NULL,
  `Subject_Name` varchar(60) NOT NULL,
  `Semester` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `syllabus`
--

INSERT INTO `syllabus` (`ID`, `Code`, `Subject_Name`, `Semester`) VALUES
(1, 'CC101', 'Calculus', 1),
(2, 'CC102', 'Vector Calculus and Linear Algebra', 2),
(3, 'CC111', 'Basic Civil Engineering', 2),
(4, 'CC121', 'Computer Programming', 2),
(5, 'CC122', 'Computer Workshop', 1),
(6, 'CC131', 'Basic Electrical Technology', 2),
(7, 'CC141', 'Fundamentals of Electronics', 1),
(8, 'CC142', 'Electronics Workshop', 1),
(9, 'CC143', 'Engineering Physics', 1),
(10, 'CC151', 'Engineering Graphics', 2),
(11, 'CC152', 'Elements of Mechanical Engineering', 1),
(12, 'CC171', 'Communication Skills', 1),
(13, 'CC174', 'Value Education, Human Rights', 2),
(14, 'CP201', 'Database Management Systems', 3),
(15, 'CP202', 'Object Oriented Programming with C++', 3),
(16, 'CP203', 'Digital Logic and Design', 3),
(17, 'CP204', 'Numerical Techniques and Probability', 3),
(18, 'CP205', 'Communication Principles and Applications', 3),
(19, 'CP206', 'Computer Organization', 4),
(20, 'CP207', 'Data and File Structures', 4),
(21, 'CP208', 'Computer Networks', 4),
(22, 'CP209', 'Computer Graphics', 4),
(23, 'CP210', 'Programming Laboratory', 4),
(24, 'MA201', 'Advanced Engineering Mathematics', 3),
(25, 'MA202', 'Professional Soft Skills', 3),
(26, 'MA203', 'Engineering Economics and Management', 4),
(27, 'CP301', 'Web Technologies', 5),
(28, 'CP302', 'Design and Analysis of Algorithm', 5),
(29, 'CP303', 'OOP with Java', 5),
(30, 'CP304', 'Processor Architecture', 5),
(31, 'CP305', 'Operating Systems', 5),
(32, 'CP306', 'Advanced Programming Laboratory', 5),
(33, 'CP307', 'Theory of Computation ', 6),
(34, 'CP308', 'Information Security', 6),
(35, 'CP309', 'Software Engineering', 6),
(36, 'CP310', 'Design Engineering', 6),
(37, 'CP311', 'Capstone Course', 6),
(38, 'CP351', '.NET Technologies', 6),
(39, 'CP352', 'Advanced Java Technology', 6),
(40, 'CP371', 'Object Oriented Concepts and Programming', 6),
(41, 'CP372', 'Internet Technologies', 6),
(42, 'CP373', 'Programming with Python', 6);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eventfiles`
--
ALTER TABLE `eventfiles`
  ADD KEY `Id` (`Id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD PRIMARY KEY (`F_ID`);

--
-- Indexes for table `notice`
--
ALTER TABLE `notice`
  ADD PRIMARY KEY (`notice_id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`project_id`);

--
-- Indexes for table `subject_faculty`
--
ALTER TABLE `subject_faculty`
  ADD PRIMARY KEY (`S_ID`);

--
-- Indexes for table `syllabus`
--
ALTER TABLE `syllabus`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `faculty`
--
ALTER TABLE `faculty`
  MODIFY `F_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `notice`
--
ALTER TABLE `notice`
  MODIFY `notice_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `project_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `subject_faculty`
--
ALTER TABLE `subject_faculty`
  MODIFY `S_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `syllabus`
--
ALTER TABLE `syllabus`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
