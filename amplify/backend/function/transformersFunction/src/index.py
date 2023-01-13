import json
import boto3

def handler(event, context):
  print('received event:')
  print(event)

  # construct input for invoke_endpoint from event/user input
  data = event.get('body')
  input = {
    'inputs': data
  }
  
  # the input into endpoint should look like this:
  # {
  #   "inputs": "This is a sample input"
  # }

  # turn input json into base64 encoded bytes
  b = json.dumps(input).encode('utf-8')

  # pass this into invoke_endpoint
  client = boto3.client('sagemaker-runtime')
  response = client.invoke_endpoint(
    EndpointName='huggingface-pytorch-inference-2023-01-06-16-44-24-136',
    Body=b,
    ContentType='application/json',
    # Accept='string',
    # CustomAttributes='string',
    # TargetModel='string',
    # TargetVariant='string',
    # TargetContainerHostname='string',
    # InferenceId='string',
    # EnableExplanations='string'
  )
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      # 'body': json.dumps('Hello from your new Amplify Python lambda!')
      'body': response
  }