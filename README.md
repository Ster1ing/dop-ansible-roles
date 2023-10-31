Laravel Application Deployment with Ansible

This README provides an overview of deploying a Laravel application using Ansible, PostgreSQL, Ansible roles, and Ansible playbooks.
Introduction

This guide outlines the process of deploying a Laravel application with a PostgreSQL database using Ansible. We'll utilize Ansible roles and playbooks to automate the deployment, ensuring consistency and efficiency in the setup.
Prerequisites

Before you begin, ensure you have the following prerequisites:

    Ansible installed on your local machine.
    Access to the Laravel application repository.

Task Description

The task involves writing an main.yml Ansible playbook that leverages the server and db roles. This playbook's objective is to install and configure an Apache web server with the Laravel application and a PostgreSQL database server on two Ubuntu 22.04 machines. The playbook must adhere to the following requirements:

    The web server should be included in the [server] group, and the database server should be included in the [db] group.
    Define variables named db_host, db_name, db_user, and db_pass to configure the connection between the application and the database.

Execution

To execute the playbook, follow these steps:

    Clone the Laravel application repository if you haven't already:

    bash

git clone https://github.com/Practical-DevOps/app-for-devops.git
cd app-for-devops

Define the necessary variables for your deployment:

    db_host: Hostname or IP address of the PostgreSQL database server.
    db_name: Name of the PostgreSQL database for the application.
    db_user: PostgreSQL username for the application.
    db_pass: Password for the PostgreSQL user.

You can set these variables when running the Ansible playbook as shown below:

bash

ansible-playbook main.yml --extra-vars "db_host=db.some.net db_name=app_db db_user=app_user db_pass=app_pass"

Execute the Ansible playbook:

bash

    ansible-playbook main.yml --extra-vars "db_host=db.some.net db_name=app_db db_user=app_user db_pass=app_pass"

The playbook will install and configure an Apache web server for the Laravel application, as well as a PostgreSQL database server, ensuring that the application is connected to the database using the provided variables.
Roles and Playbook

The Ansible playbook is named main.yml and includes two roles:

    server: Responsible for setting up the web server and deploying the Laravel application.
    db: Installs and configures the PostgreSQL database server and sets up the application database.