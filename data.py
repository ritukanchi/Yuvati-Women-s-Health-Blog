import firebase_admin
from firebase_admin import credentials, firestore

# Initialize the Firebase app with your credentials
cred = credentials.Certificate(r"C:\Users\devan\OneDrive\Desktop\cpi\Yuvati-Women-s-Health-Blog\yuvati-ca4b0-firebase-adminsdk-76h90-273da9016e.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore
db = firestore.client()

def search_documents(search_value):
    collections = db.collections()
    found_docs = False  # Flag to check if any documents were found

    for collection in collections:
        docs = collection.get()
        for doc in docs:
            # Check if the search value matches the document ID
            if search_value == do   c.id:
                found_docs = True
                print(f"Found Document by ID in Collection: {collection.id}, Document ID: {doc.id} => Data: {doc.to_dict()}")
    
    if not found_docs:
        print("No documents found with the specified ID.")

def main():
    search_value = input("Enter the document ID to search for: ")
    search_documents(search_value)

if __name__ == "__main__":
    main()
