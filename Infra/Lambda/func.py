import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Cloudresume-project')

def lambda_handler(event, context):
    try:
        # Fetch item from DynamoDB
        response = table.get_item(Key={'ID': '1'})
        print("DynamoDB response:", response)

        # Get the current visits count (handle missing item)
        visits = int(response['Item']['visits']) if 'Item' in response else 0

        # Increment visits
        visits += 1
        print(f"Updated visits count: {visits}")

        # Update the DynamoDB table
        table.put_item(Item={'ID': '1', 'visits': Decimal(visits)})
        print("Successfully updated DynamoDB.")

        # Return the updated counter
        return {
            'statusCode': 200,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'counter': visits})
        }
    except Exception as e:
        print("Error occurred:", e)
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            'body': json.dumps({'error': str(e)})
        }
