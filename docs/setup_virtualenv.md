# How to Install Pip Dependencies Only Within the Repository

## Steps to Create and Activate a Virtual Environment

1. **Create a virtual environment:**

   ```bash
   python -m venv venv
   ```

2. **Activate the virtual environment in Git Bash:**

   ```bash
   source venv/Scripts/activate
   ```

3. **Install dependencies:**

   ```bash
   pip install <package_name>
   ```

4. **Deactivate the virtual environment (when done):**

   ```bash
   deactivate
   ```

5. **Save dependencies to a `requirements.txt` file (optional):**

   ```bash
   pip freeze > requirements.txt
   ```

6. **Install dependencies from `requirements.txt` (optional):**

   ```bash
   pip install -r requirements.txt
   ```
