import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerInner}>
          <Text style={styles.headerTitle}>My Note App</Text>
          <Text style={styles.headerRight}>Logout</Text>
        </View>
      </View>
      <View>

        <View style={styles.noteListItem}>
          <View>
            <Text style={styles.noteListItemTitle}>買い物リスト</Text>
            <Text style={styles.noteListItemDate}>2024年10月14日 10:16</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.noteListItem}>
          <View>
            <Text style={styles.noteListItemTitle}>買い物リスト</Text>
            <Text style={styles.noteListItemDate}>2024年10月14日 10:16</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.noteListItem}>
          <View>
            <Text style={styles.noteListItemTitle}>買い物リスト</Text>
            <Text style={styles.noteListItemDate}>2024年10月14日 10:16</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>
      <View>
        <Text>+</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  header: {
    backgroundColor: '#467FD3',
    height: 104,
    justifyContent: 'flex-end'
  },
  headerInner: {
    alignItems: 'center'
  },
  headerRight: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  headerTitle: {
    marginBottom: 8,
    fontSize: 22,
    lineHeight: 32,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  noteListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  noteListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  noteListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})

export default Index
