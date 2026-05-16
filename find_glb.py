import urllib.request
import json
import base64

# Searching github for "computer case .glb" or similar
url = "https://api.github.com/search/code?q=filename:pc.glb+OR+filename:computer.glb+OR+filename:desktop.glb"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req) as response:
        data = json.loads(response.read().decode())
        if "items" in data and len(data["items"]) > 0:
            for item in data["items"][:5]:
                raw_url = item["html_url"].replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/")
                print(raw_url)
except Exception as e:
    print("Error:", e)
