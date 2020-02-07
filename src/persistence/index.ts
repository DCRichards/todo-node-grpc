export default abstract class Persistence {
  protected abstract connect(): Promise<void>;

  protected abstract disconnect(): Promise<void>;
}
