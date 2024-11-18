import schedule
import time
import os

def system_update():
    instructions = [
        # Next App
        ["Retrieving Updated LILIA Repository", "git pull origin main"],
        ["Ending Existing Next.js Process", "pkill -f 'node.*yamko-templates'"],
        ["Compiling Updated Code", "cd ~/LILIA/yamko-templates && npm install && npm run build"],
        ["Starting App", "cd ~/LILIA/yamko-templates && nohup npm run start > ~/LILIA/yamko-templates/app.log 2>&1 &"],
        
        # Node Server
        ["Ending Existing Node.js Process", "pkill -f 'node.*yamko-backend'"],
        ["Installing Dependencies", "cd ~/LILIA/yamko-backend && npm install"],
        ["Starting Server", "nohup node ~/LILIA/yamko-backend/server.js > ~/LILIA/yamko-backend/server.log 2>&1 &"],

        # Misc.
        ["Updating Stock Values", "source ~/LILIA/yamko-backend/ARIA/.venv/bin/activate && python3 ~/LILIA/yamko-backend/ARIA/scripts/retrieve_data.py"],
        ["Updating ARIMAX Model", "source ~/LILIA/yamko-backend/ARIA/.venv/bin/activate && python3 ~/LILIA/yamko-backend/ARIA/scripts/train_arimax.py"],
    ]

    for message, instruction in instructions:
        print(f"{message}")
        result = os.system(instruction)
        if result != 0:
            print(f"Error executing: {instruction}")
        else:
            print(f"Successfully executed: {instruction}")

schedule.every().day.at("00:00").do(system_update)
print("System Updater Running")
while True:
    schedule.run_pending()
    time.sleep(1)