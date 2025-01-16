<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description></description>
   <name>ATS1 - GET method test suite - Copy</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>4ce89610-3af6-46a7-afcd-e45f17a3a5f7</testSuiteGuid>
   <testCaseLink>
      <guid>381a8667-acf3-4f4a-b310-65815928eafd</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Api/ATC1 - Get users list successfully</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>1ab7e926-b063-4694-96be-195e4a563186</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId></testDataLinkId>
         <type>DEFAULT</type>
         <value></value>
         <variableId>401c0d88-c155-4b76-be8e-5aec1b5b307d</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>4b2b0668-491b-4981-a124-295de1e3c24c</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Api/ATC2 - Get user by id successfully</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>3d3fac20-084b-439e-a8dd-71ce14a0cf13</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>1-3</value>
         </iterationEntity>
         <testDataId>Data Files/Api/Get User By Id</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>3d3fac20-084b-439e-a8dd-71ce14a0cf13</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>id</value>
         <variableId>b014f67f-a86b-4695-b86e-4b255e149e5f</variableId>
      </variableLink>
   </testCaseLink>
   <testCaseLink>
      <guid>50bfad50-097e-4dee-adb0-37d05cbe6fcc</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Api/ATC3 - Get user by id unsuccessfully</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>b209d39c-5132-4ad2-9daa-dc6bb8e9e48e</id>
         <iterationEntity>
            <iterationType>RANGE</iterationType>
            <value>4-6</value>
         </iterationEntity>
         <testDataId>Data Files/Api/Get User By Id</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>b209d39c-5132-4ad2-9daa-dc6bb8e9e48e</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>id</value>
         <variableId>9f8819dc-451b-47dd-b7ad-c7c618957ab0</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
