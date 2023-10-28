# Task: Ansible Roles

There is the repository with some application developed on the [Laravel](https://laravel.com/) framework - https://github.com/Practical-DevOps/app-for-devops.

The task is to write the `main.yml` Ansible playbook using the roles `server` and `db`. This playbook should install and configure an Apache server with the application and PostgreSQL server on two machines with Ubuntu 22.04. Your playbook should adhere to the following requirements:

- web server is included in the group called `[server]` and database server is included in the group `[db]`
- variables named `db_host`, `db_name`, `db_user`, `db_pass` are defined to configure the connection between the application and the database

Here's an example of launching the playbook to install application on an Apache web server with a PostgreSQL database server:

```bash
ansible-playbook main.yml --extra-vars "db_host=db.some.net db_name=app_db db_user=app_user db_pass=app_pass"
```
