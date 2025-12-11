# leadflow-serverless

<!-- Space for Flow Diagram -->
<!-- Example: ![Flow Diagram](images/flow.png) -->

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

Step 1

Step 2

Step 3

Step 4

Step 5

Step 6

Step 7

Step 8

Step 9

Step 10

Step 11

Step 12
