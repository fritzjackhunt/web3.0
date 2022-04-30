import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '4vhh4xg3',
  dataset: 'production',
  apiVersion: 'v1',
  token:
    'skeGybp5asKcTF6PfsNsJi3jeWMOrZPrt1lorautzJ6qV1KQjMzsTMD0B6yXDXrPUDe3B1EpTmIEZIyn2WPxdqWVwypsj9pdkIwBQSf4PIxjq60KyY3oEgq2QhdvcahLnygOARbQROZK6pcIh9z6ug7fl7HWCPXKFC0RunCZz8eU4kL2lD2w',
  useCdn: false,
})