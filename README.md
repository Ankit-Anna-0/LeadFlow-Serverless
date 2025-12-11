# leadflow-serverless

![Screenshot_11-12-2025_114014_lucid app](https://github.com/user-attachments/assets/5cbdab84-29ae-4aad-afb2-fc94ccdf8fa1)


## Project Description

This project hosts a static website stored in an Amazon S3 bucket and delivered globally using Amazon CloudFront.  
The domain is managed through Amazon Route 53, and HTTPS certificates are provided by AWS Certificate Manager (ACM).  
Access is controlled using an S3 Bucket Policy.

User form submissions are handled through an API Gateway endpoint connected to an AWS Lambda function.  
The Lambda function stores data in DynamoDB, logs events with CloudWatch, and sends notification emails using Amazon SES — ensuring the website owner receives every message.

This architecture is fully serverless, scalable, and cost-efficient.

All process screenshots and results are included inside the steps section.

---

## Clone the Project

You can clone the project from this GitHub repository:

```bash
git clone https://github.com/pravinmishraaws/Ebook.git
```

Steps Overview

Below is the outline of all steps. Each step folder contains detailed instructions, screenshots, and results.

Step 1 - S3 Bucket

Step 2 - Route 53

Step 3 - ACM

Step 4 - CloudFront

Step 5 - Route 53 CONFIG

Step 6 - Website

Step 7 - SES

Step 8 - Lambda iam role and policy

Step 9 - lambda

Step 10 - Rest API

Step 11 - Change in JS code

Step 12 - DynamoDB 
